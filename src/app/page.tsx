import dynamic from "next/dynamic";

const SdkLogin = dynamic(() => import("../components/sdk-login"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-lg font-bold mb-5">SDKポップアップ動作テスト</h1>

      <div className="grid gap-5">
        <SdkLogin />
        <SdkLogin authAction={{ login: false, signup: true }} />
        <SdkLogin authAction={{ login: true, signup: false }} />
        <SdkLogin authAction={{ login: true, signup: true }} />
        <SdkLogin loginProvider="google" />
        <SdkLogin loginProvider="email_password" />
        <SdkLogin
          authAction={{ login: false, signup: true }}
          loginProvider="google"
        />
        <SdkLogin
          authAction={{ login: true, signup: false }}
          loginProvider="google"
        />
        <SdkLogin
          authAction={{ login: true, signup: true }}
          loginProvider="google"
        />
        <SdkLogin
          authAction={{ login: false, signup: true }}
          loginProvider="email_password"
        />
        <SdkLogin
          authAction={{ login: true, signup: false }}
          loginProvider="email_password"
        />
        <SdkLogin
          authAction={{ login: true, signup: true }}
          loginProvider="email_password"
        />
      </div>
    </main>
  );
}
