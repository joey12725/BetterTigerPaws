import {Flex, Text, useTheme} from "@aws-amplify/ui-react";

export function Footer(){
    const {tokens} = useTheme();
    return(
        
        <Flex justifyContent="center" padding = {tokens.space.medium}>
        <footer class="row tm-mt-big">
        <div class="col-12 font-weight-light text-center">
            <p class="d-inline-block tm-bg-black text-white py-2 px-4">
                Copyright &copy; 2023 Dr. Horn - Cracking open cold ones (soda) since 1987
            </p>
        </div>
    </footer>
    </Flex>
    );
}

