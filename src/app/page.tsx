import dynamic from "next/dynamic";

const SdkLogin = dynamic(() => import("../components/sdk-login"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-lg font-bold mb-5">SDKポップアップ動作テスト</h1>

      <div className="grid gap-5">
        <SdkLogin name="A-1" />
        <SdkLogin name="A-2" authAction={{ login: false, signup: true }} />
        <SdkLogin name="A-3" authAction={{ login: true, signup: false }} />
        <SdkLogin name="A-4" authAction={{ login: true, signup: true }} />
        <SdkLogin name="A-5" loginProvider="google" />
        <SdkLogin name="A-6" loginProvider="email_password" />
        <SdkLogin
          name="A-7"
          authAction={{ login: false, signup: true }}
          loginProvider="google"
        />
        <SdkLogin
          name="A-8"
          authAction={{ login: true, signup: false }}
          loginProvider="google"
        />
        <SdkLogin
          name="A-9"
          authAction={{ login: true, signup: true }}
          loginProvider="google"
        />
        <SdkLogin
          name="A-10"
          authAction={{ login: false, signup: true }}
          loginProvider="email_password"
        />
        <SdkLogin
          name="A-11"
          authAction={{ login: true, signup: false }}
          loginProvider="email_password"
        />
        <SdkLogin
          name="A-12"
          authAction={{ login: true, signup: true }}
          loginProvider="email_password"
        />
      </div>

      <h1 className="text-lg font-bold mb-5 mt-10">
        withModal: trueのパターン
      </h1>

      <div className="grid gap-5">
        <SdkLogin name="B-1" />
        <SdkLogin
          name="B-2"
          authAction={{ login: false, signup: true }}
          withModal={true}
        />
        <SdkLogin
          name="B-3"
          authAction={{ login: true, signup: false }}
          withModal={true}
        />
        <SdkLogin
          name="B-4"
          authAction={{ login: true, signup: true }}
          withModal={true}
        />
        <SdkLogin name="B-5" loginProvider="google" withModal={true} />
        <SdkLogin name="B-6" loginProvider="email_password" withModal={true} />
        <SdkLogin
          name="B-7"
          authAction={{ login: false, signup: true }}
          loginProvider="google"
          withModal={true}
        />
        <SdkLogin
          name="B-8"
          authAction={{ login: true, signup: false }}
          loginProvider="google"
          withModal={true}
        />
        <SdkLogin
          name="B-9"
          authAction={{ login: true, signup: true }}
          loginProvider="google"
          withModal={true}
        />
        <SdkLogin
          name="B-10"
          authAction={{ login: false, signup: true }}
          loginProvider="email_password"
          withModal={true}
        />
        <SdkLogin
          name="B-11"
          authAction={{ login: true, signup: false }}
          loginProvider="email_password"
          withModal={true}
        />
        <SdkLogin
          name="B-12"
          authAction={{ login: true, signup: true }}
          loginProvider="email_password"
          withModal={true}
        />
      </div>
    </main>
  );
}
