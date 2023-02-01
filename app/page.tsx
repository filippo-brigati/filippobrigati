import Image from "next/image";
import avatar from "./images/me.jpg";
import { getTweetCount, getCommitCount } from "dev/lib/metrics";
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons";

export default async function Home() {
  const [tweetCount, commitCount] = await Promise.all([
    getTweetCount(),
    getCommitCount(),
  ]);

  return (
    <>
      <div className="w-full">
        <h1 className="font-bold text-3xl text-black dark:text-white">Filippo Brigati</h1>
        <p className="font-normal text-base text-neutral-700 dark:text-neutral-50 mt-5 max-w-[490px]">
          Hey, I'm Filippo, a computer science student from Italy.
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={"It's me"}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-100 gap-2">
            <p className="flex items-center">
              <TwitterLogoIcon className="h-4 w-4 mr-2" />
              {`${tweetCount.toLocaleString()} tweets all time`}
            </p>
            <p className="flex items-center">
              <GitHubLogoIcon className="h-4 w-4 mr-2" />
              {`${commitCount.toLocaleString()} commit on this repo`}
            </p>
            <p className="flex items-center">
              <LightningBoltIcon className="h-4 w-4 mr-2" />3 side project
            </p>
          </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-50">
          I'm a 20 year old guy from Reggio Emilia, Italy. I'm passionate about
          fontend development, I'm using React and Next but now I'm learning
          React Native to build cross platform mobile apps.
        </p>
      </div>
    </>
  );
}
