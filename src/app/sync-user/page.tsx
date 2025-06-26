import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server'; 
import { clerkClient } from '@clerk/clerk-sdk-node';
import { redirect } from 'next/navigation';

const SyncUser = async () => {
  const { userId } = await auth();
  if (!userId) throw new Error('User not found');

  const user = await clerkClient.users.getUser(userId); 

  const email = user.emailAddresses[0]?.emailAddress ?? '';

  await db.user.upsert({
    where: {
      emailAddress: email,
    },
    update: {
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      credits: typeof user.publicMetadata?.credits === "number" ? user.publicMetadata.credits : 0,
    },
    create: {
      id: Number(userId),
      emailAddress: email,
      imageUrl: user.imageUrl,
      firstName: user.firstName,
      lastName: user.lastName,
      credits: typeof user.publicMetadata?.credits === "number" ? user.publicMetadata.credits : 150,
    },
  });  
  return redirect('/dashboard');
};

export default SyncUser;
