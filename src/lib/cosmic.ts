import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: import.meta.env.PUBLIC_COSMIC_READ_KEY,
});

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: "posts",
    })
    .props("title,slug,metadata,created_at");

  return data.objects;
}
