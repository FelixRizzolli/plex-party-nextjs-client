import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function Profile() {

  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          <Image width={140} height={140} className="mx-auto flex-shrink-0 rounded-full" src={session.user?.image ?? '/vercel.svg'} alt="" />
          <h3 className="mt-6 text-sm font-medium text-gray-900">{session.user?.name}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{session.user?.email}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {'Admin'}
              </span>
            </dd>
          </dl>
        </div>
      </div>
    </main>
  );
}
  