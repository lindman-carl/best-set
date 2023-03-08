import { type NextPage } from "next";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";

// components
import Dashboard from "~/components/Dashboard";

// types
import type { Exercise } from "@prisma/client";

const testExercises: Exercise[] = [
  {
    id: "1",
    name: "Bench press",
    userId: "1",
  },
  {
    id: "2",
    name: "Squat",
    userId: "1",
  },
  {
    id: "3",
    name: "Deadlift",
    userId: "1",
  },
];

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  // const [exercises, setExercises] = useState<Exercise[]>([]);

  // useEffect(() => {
  //   const fetchExercises = async () => {
  //     const res = await fetch("/api/exercises");
  //     const data = (await res.json()) as Exercise[];
  //     console.log(data);
  //     setExercises(data);
  //   };
  //   void fetchExercises();
  // }, []);

  return (
    <>
      <Head>
        <title>Best Set</title>
        <meta
          name="description"
          content="Best Set is a exercise tracker focused on simple adhd-friendly data gathering"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {sessionData?.user ? (
        <Dashboard exercises={testExercises} />
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
          <h1 className="text-6xl font-bold text-white">Best Set</h1>
          <span className="text-2xl text-white">
            A minimalistic exercise tracker with individuals with ADHD in mind
          </span>
          <button
            className="mt-4 rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
