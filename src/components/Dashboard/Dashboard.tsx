import type { Exercise } from "@prisma/client";

type Props = {
  exercises?: Exercise[];
};

const StarSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.0748 3.25583C11.4141 2.42845 12.5859 2.42845 12.9252 3.25583L14.6493 7.45955C14.793 7.80979 15.1221 8.04889 15.4995 8.07727L20.0303 8.41798C20.922 8.48504 21.2841 9.59942 20.6021 10.1778L17.1369 13.1166C16.8482 13.3614 16.7225 13.7483 16.8122 14.1161L17.8882 18.5304C18.1 19.3992 17.152 20.0879 16.3912 19.618L12.5255 17.2305C12.2034 17.0316 11.7966 17.0316 11.4745 17.2305L7.60881 19.618C6.84796 20.0879 5.90001 19.3992 6.1118 18.5304L7.18785 14.1161C7.2775 13.7483 7.1518 13.3614 6.86309 13.1166L3.3979 10.1778C2.71588 9.59942 3.07796 8.48504 3.96971 8.41798L8.50046 8.07727C8.87794 8.04889 9.20704 7.80979 9.35068 7.45955L11.0748 3.25583Z"
      stroke="#000000"
      stroke-width="1"
    />
  </svg>
);

const BestSetSvg = () => (
  <svg
    fill="#000000"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M357.542 0H1562.46V119.181H1920V542.868C1920 655.236 1875.36 763.003 1795.91 842.46C1731.12 907.242 1647.52 948.879 1557.95 962.049C1544.78 1051.62 1503.15 1135.22 1438.36 1200C1360.45 1277.91 1255.32 1322.35 1145.33 1324.05V1496.31C1145.33 1510.38 1150.91 1523.87 1160.86 1533.81C1170.81 1543.76 1184.3 1549.35 1198.36 1549.35C1263.32 1549.35 1325.61 1575.15 1371.54 1621.08C1417.47 1667.01 1443.28 1729.31 1443.28 1794.26V1920H476.723V1794.26C476.723 1729.31 502.528 1667.01 548.458 1621.08C594.388 1575.15 656.682 1549.35 721.639 1549.35C735.705 1549.35 749.195 1543.76 759.14 1533.81C769.086 1523.87 774.674 1510.38 774.674 1496.31V1324.05C664.677 1322.35 559.547 1277.91 481.637 1200C416.854 1135.22 375.218 1051.62 362.048 962.049C272.477 948.879 188.877 907.242 124.095 842.46C44.6379 763.003 0 655.236 0 542.868V119.181H357.542V0ZM357.542 251.471H132.29V542.868C132.29 620.151 162.991 694.269 217.638 748.917C256.412 787.69 304.988 814.409 357.542 826.659V251.471ZM1562.46 826.659V251.471H1787.71V542.868C1787.71 620.151 1757.01 694.269 1702.36 748.917C1663.59 787.69 1615.01 814.409 1562.46 826.659ZM959.198 320L1034.59 564.21H1280L1081.1 715.79L1159.7 960L960.801 808.422L761.906 960L838.898 714.104L640 562.527H885.413L959.198 320Z"
    />
  </svg>
);

const ArrowSvg = () => (
  <svg
    viewBox="0 0 18 24"
    fill="none"
    stroke="#000"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M16 12L2 12" />
    <path d="M12 15L16 12V12C16 12 16 12 16 12V12L12 9" />
  </svg>
);

const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <div className="grid h-36 w-full grid-cols-10 grid-rows-5 rounded-xl bg-white p-4 shadow-lg">
      <div className="col-span-1 col-start-1 row-span-2 row-start-1 flex items-center">
        <StarSvg />
      </div>
      <div className="col-span-5 col-start-2 row-span-2 row-start-1 flex items-center pl-2 text-xl font-medium">
        {exercise.name}
      </div>
      <div className="col-span-7 col-start-1 row-span-3 row-start-3">
        <svg viewBox="0 0 24 10" className="drop-shadow">
          <text x="0" y="4.5" fill="gray" style={{ fontSize: "1pt" }}>
            100
          </text>
          <line
            dx="0"
            x1="3"
            y1="4"
            x2="24"
            y2="4"
            stroke="gray"
            strokeWidth="0.1"
          />
          <circle cx="4" cy="7" r="0.5" fill="green" />
          <circle cx="6" cy="6" r="0.5" fill="green" />
          <circle cx="8" cy="4" r="0.5" fill="green" />
          <circle cx="10" cy="7" r="0.5" fill="green" />
          <circle cx="12" cy="5" r="0.5" fill="green" />
          <circle cx="14" cy="4" r="0.5" fill="green" />
          <circle cx="16" cy="4" r="0.5" fill="green" />
          <circle cx="18" cy="3" r="0.5" fill="green" />
          <circle cx="20" cy="4" r="0.5" fill="green" />
          <circle cx="22" cy="2" r="0.5" fill="green" />
        </svg>
      </div>

      <div className="col-span-4 col-start-7 row-span-2 row-start-1 flex flex-row items-center justify-between">
        <div className="flex w-6 flex-col items-center justify-center">
          <BestSetSvg />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-medium">100</div>
          <div className="text-sm">Kg</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl font-medium">5</div>
          <div className="text-sm">Reps</div>
        </div>
      </div>
      <div className="col-span-3 col-start-8 row-span-2 row-start-4 flex items-center justify-end">
        <button className="w-10">
          <ArrowSvg />
        </button>
      </div>
    </div>
  );
};

const Dashboard = ({ exercises }: Props) => {
  return (
    <div className="flex h-screen w-screen flex-col items-stretch justify-start gap-y-4 bg-slate-700 p-4">
      {exercises ? (
        exercises?.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))
      ) : (
        <div>No exercises found, add one</div>
      )}
    </div>
  );
};

export default Dashboard;
