import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rink Gems</title>
        <meta name={"description"} content={"Rink Gems"} />
        <meta
          name={"viewport"}
          content={"width=device-width, initial-scale=1"}
        />
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <div
        className={
          "uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle"
        }
        data-uk-height-viewport={""}
      >
        <div className={"uk-container uk-container-expand"}>
          <h1>🏒 Rink Gems</h1>
        </div>
      </div>
    </>
  );
}
