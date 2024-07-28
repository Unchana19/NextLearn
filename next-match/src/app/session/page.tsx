import { auth } from '@/auth';
import ClientSession from '@/components/client-session';
import { NextPage } from 'next';

interface Props {}

const SessionPage: NextPage<Props> = async () => {
 const session = await auth();

 return (
   <div className="flex flex-row justify-around mt-20 gap-6">
     <div className="bg-green-50 p-10 rounded-xl shadow-md w-1/2 overflow-auto">
       <h3 className="text-2xl font-semibold">Server session data: </h3>
       {session ? (
         <div>
           <pre>{JSON.stringify(session, null, 2)}</pre>
         </div>
       ) : (
         <div>Not Signed In</div>
       )}
     </div>
     <ClientSession />
   </div>
 );
};

export default SessionPage;