import logo from './logo.svg';
import weird_profile from './weird_profile.png';
import { Flex, View, Text, Heading, SearchField, Image, Button } from '@aws-amplify/ui-react';
import Webcam from "react-webcam";
import { useState } from 'react';

function Home(props) {
    const { user, signOut } = props;
    const [show_camera, setCamera] = useState(false);
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const WebcamCapture = () => (
        <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
        >
            {({ getScreenshot }) => (
                <button
                    onClick={() => {
                        const imageSrc = getScreenshot()
                    }}
                >
                    Capture photo
                </button>
            )}
        </Webcam>
    );
    const toggleCamera = () => {
        console.log(show_camera);
        setCamera(show_camera === false)
    }
    return (
        <div className="App">
            <Flex
                alignContent="center"
                alignItems="center"
            >
                <View>
                    <Flex
                        alignContent="center"
                        alignItems="center"
                        gap={0}
                    >
                        <Image src={logo} width={64} height={64} alt="logo"></Image>
                        <Heading level={2}>Coffee History</Heading>
                    </Flex>
                </View>
                <Flex
                    paddingRight={10}
                    marginLeft="auto"
                    alignContent="center"
                    alignItems="center"
                >
                    <SearchField
                        placeholder="Search here..."
                    />
                    <Button onClick={toggleCamera}>Take a picture!</Button>
                    <Image src={weird_profile} width={32} height={32}></Image>
                </Flex>
            </Flex>
            {show_camera === true && WebcamCapture()}
            <h1>Hello {user.attributes.preferred_username}</h1>
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Home;