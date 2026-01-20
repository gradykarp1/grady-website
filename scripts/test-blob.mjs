import { list, put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

// Read the profile data manually
const profilePath = path.join(process.cwd(), 'data', 'grady-profile.ts');
const content = fs.readFileSync(profilePath, 'utf-8');
const startIndex = content.indexOf('{');
const endIndex = content.lastIndexOf('}');
const objectStr = content.slice(startIndex, endIndex + 1);
const fn = new Function(`return ${objectStr}`);
const gradyProfile = fn();

async function test() {
  try {
    console.log('Token present:', Boolean(process.env.BLOB_READ_WRITE_TOKEN));
    console.log('Testing blob list...');
    const result = await list({ prefix: 'profile/' });
    console.log('Blobs found:', result.blobs.length);
    result.blobs.forEach(b => console.log(' -', b.pathname, b.url));

    if (result.blobs.length === 0) {
      console.log('No blobs found, attempting to seed...');
      const { url } = await put('profile/experiences.json', JSON.stringify(gradyProfile.experience, null, 2), {
        access: 'public',
        contentType: 'application/json',
        addRandomSuffix: false
      });
      console.log('Seeded successfully:', url);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

test();
