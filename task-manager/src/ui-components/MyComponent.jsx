/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Button, Flex, Icon, Rating, Text } from "@aws-amplify/ui-react";
export default function MyComponent(props) {
  const { overrides, ...rest } = props;
  const [vectorOneBackgroundColor, setVectorOneBackgroundColor] =
    useStateMutationAction(undefined);
  const vectorOneOnClick = () => {
    setVectorOneBackgroundColor("red");
  };
  return (
    <Flex
      gap="30px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="10px 44px 10px 44px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyComponent")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="251px"
        height="26px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 28")}
      >
        <MyIcon
          width="24px"
          height="24px"
          position="absolute"
          top="1px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          type="favorite"
          {...getOverrideProps(overrides, "MyIcon35462976")}
        ></MyIcon>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="211px"
          height="26px"
          position="absolute"
          top="0px"
          left="40px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="My text"
          {...getOverrideProps(overrides, "My text")}
        ></Text>
      </Flex>
      <Rating
        display="flex"
        gap="8px"
        width="fit-content"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="default"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Default Button"
        {...getOverrideProps(overrides, "Button35553093")}
      ></Button>
      <Flex
        padding="0px 0px 0px 0px"
        width="178.5px"
        height="40px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 29")}
      >
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="28.5px"
          justifyContent="center"
          alignItems="center"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Primary Button"
          {...getOverrideProps(overrides, "Button35563125")}
        ></Button>
        <Icon
          width="24px"
          height="24px"
          position="absolute"
          top="8px"
          left="0px"
          overflow="hidden"
          padding="0px 0px 0px 0px"
          type="warning"
          fontSize="24px"
          {...getOverrideProps(overrides, "MyIcon35563153")}
        ></Icon>
      </Flex>
      <Icon
        width="49.4px"
        height="52px"
        viewBox={{ minX: 0, minY: 0, width: 49.4013671875, height: 52 }}
        paths={[
          {
            d: "M15.9018 7.5L15.7926 7.01208L15.7064 7.03138L15.632 7.07906L15.9018 7.5ZM0.401819 36.5L-0.0841062 36.6178L-0.0510241 36.7543L0.0482654 36.8536L0.401819 36.5ZM15.9018 52L15.5483 52.3536L15.7855 52.5908L16.0949 52.4612L15.9018 52ZM37.4014 43L37.5944 43.4612L38.2686 43.179L37.7613 42.6529L37.4014 43ZM23.9014 29L23.7517 28.5229L22.9801 28.765L23.5414 29.3471L23.9014 29ZM49.4014 21L49.551 21.4771L49.9014 21.3672L49.9014 21L49.4014 21ZM49.4014 0L49.9014 0L49.9014 -0.62432L49.2921 -0.487921L49.4014 0ZM15.632 7.07906C-0.151955 17.197 -1.46646 30.9156 -0.0841062 36.6178L0.887744 36.3822C-0.396573 31.0844 0.755593 17.803 16.1717 7.92094L15.632 7.07906ZM0.0482654 36.8536L15.5483 52.3536L16.2554 51.6464L0.755372 36.1464L0.0482654 36.8536ZM16.0949 52.4612L37.5944 43.4612L37.2083 42.5388L15.7087 51.5388L16.0949 52.4612ZM37.7613 42.6529L24.2613 28.6529L23.5414 29.3471L37.0414 43.3471L37.7613 42.6529ZM24.051 29.4771L49.551 21.4771L49.2517 20.5229L23.7517 28.5229L24.051 29.4771ZM49.9014 21L49.9014 0L48.9014 0L48.9014 21L49.9014 21ZM49.2921 -0.487921L15.7926 7.01208L16.0111 7.98792L49.5106 0.487921L49.2921 -0.487921Z",
            stroke: "rgba(82,154,132,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M15.9018 7.5C0.301819 17.5 -0.931515 31 0.401819 36.5L15.9018 52L37.4014 43L23.9014 29L49.4014 21L49.4014 0L15.9018 7.5Z",
            fill: "rgba(106,86,66,1)",
            fillRule: "nonzero",
          },
        ]}
        shrink="0"
        position="relative"
        backgroundColor={vectorOneBackgroundColor}
        onClick={() => {
          vectorOneOnClick();
        }}
        {...getOverrideProps(overrides, "Vector 1")}
      ></Icon>
    </Flex>
  );
}
