import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

export function SignInFooter() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={tokens.space.medium}>
      <Link onClick={toResetPassword}>Reset your password</Link>
    </Flex>
  );
}