import dynamic from "next/dynamic";
import EnvSwitcher from "@/components/env-switcher";

const SdkLogin = dynamic(() => import("../components/sdk-login"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-lg font-bold mb-5">SDKポップアップ動作テスト</h1>

      <EnvSwitcher />

      <div className="grid gap-5">
        <SdkLogin name="A-1" />
        <SdkLogin name="A-2" authAction={{ login: false, signup: true }} />
        <SdkLogin name="A-3" authAction={{ login: true, signup: false }} />
        <SdkLogin name="A-4" authAction={{ login: true, signup: true }} />
        <SdkLogin name="A-5" loginProviders={["google"]} />
        <SdkLogin name="A-6" loginProviders={["email_password"]} />
        <SdkLogin
          name="A-7"
          authAction={{ login: false, signup: true }}
          loginProviders={["google"]}
        />
        <SdkLogin
          name="A-8"
          authAction={{ login: true, signup: false }}
          loginProviders={["google"]}
        />
        <SdkLogin
          name="A-9"
          authAction={{ login: true, signup: true }}
          loginProviders={["google"]}
        />
        <SdkLogin
          name="A-10"
          authAction={{ login: false, signup: true }}
          loginProviders={["email_password"]}
        />
        <SdkLogin
          name="A-11"
          authAction={{ login: true, signup: false }}
          loginProviders={["email_password"]}
        />
        <SdkLogin
          name="A-12"
          authAction={{ login: true, signup: true }}
          loginProviders={["email_password"]}
        />
      </div>

      <h1 className="text-lg font-bold mb-5 mt-10">
        withModal: trueのパターン
      </h1>

      <div className="grid gap-5">
        <SdkLogin name="B-1" withModal={true} />
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
        <SdkLogin name="B-5" loginProviders={["google"]} withModal={true} />
        <SdkLogin
          name="B-6"
          loginProviders={["email_password"]}
          withModal={true}
        />
        <SdkLogin
          name="B-7"
          authAction={{ login: false, signup: true }}
          loginProviders={["google"]}
          withModal={true}
        />
        <SdkLogin
          name="B-8"
          authAction={{ login: true, signup: false }}
          loginProviders={["google"]}
          withModal={true}
        />
        <SdkLogin
          name="B-9"
          authAction={{ login: true, signup: true }}
          loginProviders={["google"]}
          withModal={true}
        />
        <SdkLogin
          name="B-10"
          authAction={{ login: false, signup: true }}
          loginProviders={["email_password"]}
          withModal={true}
        />
        <SdkLogin
          name="B-11"
          authAction={{ login: true, signup: false }}
          loginProviders={["email_password"]}
          withModal={true}
        />
        <SdkLogin
          name="B-12"
          authAction={{ login: true, signup: true }}
          loginProviders={["email_password"]}
          withModal={true}
        />
      </div>

      <h1 className="text-lg font-bold mb-5 mt-10">その他自由な検証枠</h1>

      <div className="grid gap-5">
        <SdkLogin
          name="C-1"
          authAction={{ login: true, signup: false }}
          loginProviders={[
            "facebook",
            "google",
            "email_password",
            "email_passwordless",
          ]}
          withModal={true}
        />
      </div>

      <h1 className="text-lg font-bold mb-5 mt-10">
        MetaMask（authActionやloginProvidersの設定によって挙動変わらないので、一つだけ）
      </h1>

      <div className="grid gap-5">
        <SdkLogin name="Z-1" wallet="metamask" />
      </div>
    </main>
  );
}
