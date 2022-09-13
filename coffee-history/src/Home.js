import logo from './logo.svg';

import { Flex, View, Text, Heading, SearchField } from '@aws-amplify/ui-react';

function Home(props) {
    const signOut = props.sign_out;
    const user = props.user;
    return (
        <div className="App">
            <Flex>                    
                <view>
                    <img src={logo} width={64} height={64} />
                    <Heading level={2}>Coffee History</Heading>
                    <SearchField
                        placeholder="Search here..."
                    />
                </view>
            </Flex>
            <h1>Hello {user.attributes.preferred_username}</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Home;