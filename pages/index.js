/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import fetch from "isomorphic-unfetch";
import Head from "next/head";
export default function Home(props) {
  const iconsrc =
    "https://cdn.discordapp.com/icons/" +
    props.guild.id +
    "/" +
    props.guild.icon;
  const members = (+props.approximate_member_count).toLocaleString("en-US");
  const online = (+props.approximate_presence_count).toLocaleString("en-US");
  const booster = (+props.guild.premium_subscription_count).toLocaleString(
    "en-US"
  );
  const serverName = props.guild.name;
  const serverDesc = props.guild.welcome_screen.description;
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content={props.guild.description} />
        <meta
          name="keywords"
          content="discord, discord server, server, nongkrong santuy, nongkroung santuy server,server dashboard, dashboard, nongkrong santuy discord server"
        />
        <meta name="author" content="Reza @revernry" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={iconsrc}></link>
        <title>NS Server</title>
      </Head>
      <div className="pb-3 bg-gradient-to-t from-color-first to-color-scnd h-screen">
        <div className="bg-color-secondary px-4">
          <div className="w-auto container pb-10 md:pb-10 mx-auto bg-color-secondary pt-9">
            <img className=" lg:mx-auto" src="/welcome.svg" />
          </div>
        </div>

        <div className="-mt-16 md:-mt-20">
          <img
            className="mx-auto rounded-full w-36 md:w-60 mb-7"
            src={iconsrc}
          />
        </div>
        <div className="">
          <div className="mx-auto text-[#fff]">
            <h1 className="mx-auto mb-4 md:mb-6 font-black text-center font-roboto text-3xl md:text-7xl">
              {serverName}
            </h1>
            <p className="text-center mx-auto w-80 md:w-[650px] text-md md:text-2xl font-poppins">
              {serverDesc}
            </p>
          </div>
        </div>
        <div id="memberCount" className="mx-auto leading-6 md:leading-normal">
          <ul className="flex flex-wrap md:flex-nowrap justify-center mt-7">
            <li className="mr-7 text-[#fff] pb-2">
              <a className="rounded-full mr-4 px-[10px]  bg-[#c4c4c4]"></a>{" "}
              <span className="md:text-xl"> {members}</span>{" "}
              <span className="font-bold"> Members </span>{" "}
            </li>
            <li className="mr-7 text-[#fff] pb-2">
              <a className="rounded-full mr-4 px-[10px] bg-[#00FF47]"></a>{" "}
              <span className="md:text-xl"> {online} </span>{" "}
              <span className="font-bold"> Online </span>
            </li>
            <li className="mr-7 text-[#fff] pb-2">
              <a className="rounded-full mr-4 px-[10px] bg-[#FF00E5]"></a>{" "}
              <span className="md:text-xl"> {booster} </span>{" "}
              <span className="font-bold"> Boosters </span>
            </li>
          </ul>
        </div>
        <div className="flex mx-auto my-10">
          <a
            className="bg-color-secondary rounded-lg py-2 px-4 mx-auto text-[#fff] text-2xl font-semibold hover:bg-color-first hover:border-2 hover:border-color-secondary hover:text-color-secondary"
            href="https://discord.gg/yBUXbUYVF"
          >
            JOIN SERVER
          </a>
        </div>
      </div>
    </>
  );
}

Home.getInitialProps = async function () {
  const res = await fetch(
    "https://discord.com/api/v9/invites/yBUXbUYVFj?with_counts=true&with_expiration=true"
  );
  const data = await res.json();

  return data;
};
