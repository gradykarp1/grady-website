import {
  getExperiencesFromBlob,
  saveExperiencesToBlob,
} from "./blob-storage";
import { gradyProfile } from "@/data/grady-profile";
import type { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  try {
    // Try to get from blob storage
    const experiences = await getExperiencesFromBlob();

    if (experiences !== null) {
      return experiences;
    }

    // Blob doesn't exist yet, seed from static data
    console.log("Seeding blob storage with experiences from grady-profile.ts");
    await saveExperiencesToBlob(gradyProfile.experience);
    return gradyProfile.experience;
  } catch (error) {
    console.error("Blob storage error, falling back to static data:", error);
    // Fall back to static data if blob storage fails
    return gradyProfile.experience;
  }
}

export async function updateExperiences(
  experiences: Experience[]
): Promise<void> {
  await saveExperiencesToBlob(experiences);
}
