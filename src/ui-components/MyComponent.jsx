/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, Rating, Text } from "@aws-amplify/ui-react";
export default function MyComponent(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="43px 81px 43px 81px"
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
          {...getOverrideProps(overrides, "MyIcon")}
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
    </Flex>
  );
}
