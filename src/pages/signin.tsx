import MailOutlined from "@ant-design/icons/MailOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import Link from "next/link";
import jwt from "jsonwebtoken";
import { FormField, SignInLayout } from "@/components";
import { Form, Formik } from "formik";
import { signIn } from "@/services/auth.services";
import { useLoadingState } from "@/hooks/useLoadingState";
import { useToastState } from "@/hooks/useToastState";
import { AxiosError } from "axios";
import { ArrowBack } from "@mui/icons-material";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect } from "react";
import { useRouter } from "next/router";

const Signin: NextPageWithLayout = () => {
  const router = useRouter();

  const initalValues = {
    username: "",
    password: "",
  };

  const { setIsLoading } = useLoadingState();
  const { showToast } = useToastState();

  const handleSubmit = async (values: any) => {
    try {
      setIsLoading(true);

      const response = await signIn({
        username: values.username,
        password: values.password,
      });

      if (response.status == 200) {
        const decodedToken = jwt.decode(response.data.token);

        localStorage.setItem("users", JSON.stringify(decodedToken));

        showToast("Berhasil login", "success", () => {
          router.push("/");
        });
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        showToast(error?.response?.data, "error", null);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users) {
      const parsedData = JSON.parse(users);

      if (parsedData) {
        router.push("/");
      }
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="shadow-[0_5px_8px_#d4d4d4] rounded-xl px-12 py-6 w-[90%] lg:w-[30%]">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold mb-2 text-primary">
            Sign <span className="text-secondary">in</span>
          </h1>
          <p className="text-sm text-zinc-500">Belanja menjadi lebih mudah dengan DIONZ Store.</p>
        </div>
        <div className="mb-16">
          <Formik initialValues={initalValues} onSubmit={handleSubmit}>
            {() => {
              return (
                <Form>
                  <div className="mb-6">
                    <FormField type="text" name="username" label="Username" />
                  </div>
                  <div className="mb-9">
                    <FormField type="password" name="password" label="Password" />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-5 rounded-md text-white bg-primary hover:bg-primary-hover transition-colors duration-150 text-sm leading-none">
                    Sign in
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <p className="text-xs text-zinc-500 text-center mb-1">Made by :</p>
          <p className="flex justify-center items-center gap-2 text-xs text-zinc-500 text-center mb-1">
            <UserOutlined className="text-primary" /> Rafly Dioniswara Pramono
          </p>
          <p className="flex justify-center items-center gap-2 text-xs text-zinc-500 text-center">
            <MailOutlined className="text-primary" /> raflypram368@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

Signin.getLayout = (page: ReactElement) => {
  return <SignInLayout>{page}</SignInLayout>;
};

export default Signin;
