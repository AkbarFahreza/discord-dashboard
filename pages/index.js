/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import fetch from "isomorphic-unfetch";
import Head from "next/head";
export default function Home(props) {
  var iconsrc =
    "https://cdn.discordapp.com/icons/" +
    props.guild.id +
    "/" +
    props.guild.icon;
  var members = (+props.approximate_member_count).toLocaleString("en-US");
  var online = (+props.approximate_presence_count).toLocaleString("en-US");
  var booster = (+props.guild.premium_subscription_count).toLocaleString(
    "en-US"
  );
  var serverName = props.guild.name;
  var serverDesc = props.guild.welcome_screen.description;
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta
          name="keywords"
          content="discord, discord server, server, nongkrong santuy, nongkroung santuy server,server dashboard, dashboard, nongkrong santuy discord server"
        />
        <meta name="author" content="Reza @revernry" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={iconsrc}></link>
        <title>NS Server</title>
      </Head>
      <div className="bg-gradient-to-t from-color-first to-color-scnd pb-3">
        <div className="bg-color-secondary">
          <div className="container mx-auto bg-color-secondary pt-9 pb-10">
            <img className="mx-auto" src="/welcome.svg"></img>
          </div>
        </div>

        <div className="-mt-20">
          <img className="rounded-full w-60 mx-auto mb-7" src={iconsrc} />
        </div>
        <div className="">
          <div className="mx-auto text-[#fff]">
            <h1 className="text-center mx-auto font-roboto font-black text-7xl mb-6">
              {serverName}
            </h1>
            <p className="text-center mx-auto w-[650px] text-2xl font-poppins">
              {serverDesc}
            </p>
          </div>
        </div>
        <div id="memberCount" className="mx-auto">
          <ul className="flex justify-center mt-7">
            <li className="mr-7 text-[#fff]">
              <a className="rounded-full mr-4 px-[10px]  bg-[#c4c4c4]"></a>{" "}
              <span className="text-xl"> {members}</span>{" "}
              <span className="font-bold"> Members </span>{" "}
            </li>
            <li className="mr-7 text-[#fff]">
              <a className="rounded-full mr-4 px-[10px] bg-[#00FF47]"></a>{" "}
              <span className="text-xl"> {online} </span>{" "}
              <span className="font-bold"> Online </span>
            </li>
            <li className="mr-7 text-[#fff]">
              <a className="rounded-full mr-4 px-[10px] bg-[#FF00E5]"></a>{" "}
              <span className="text-xl"> {booster} </span>{" "}
              <span className="font-bold"> Boosters </span>
            </li>
          </ul>
        </div>
        <div className="flex mx-auto my-10">
          <a
            className="bg-color-secondary rounded-lg py-2 px-4 mx-auto text-[#fff] text-2xl font-semibold hover:bg-color-first hover:border-2 hover:border-color-secondary hover:text-color-secondary"
            href=""
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
