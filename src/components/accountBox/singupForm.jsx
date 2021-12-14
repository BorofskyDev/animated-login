import react, { useContext } from "react";
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from "./common"
import { Marginer } from "../marginer/index"
import { AccountContext } from "./accountContext"

export function SignupForm(props) {

    const { switchToSignin } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="First and Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Enter Password" />
            <Input type="password" placeholder="Confirm Password" />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit">Submit</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
            Already have an account? <BoldLink href="#" onClick={switchToSignin}>Sign In</BoldLink></MutedLink>
    </BoxContainer>
}