/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Image } from "@aws-amplify/ui-react";
import SearchBar from "./SearchBar";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="273px"
      height="156px"
      alignItems="center"
      position="relative"
      padding="16px 17px 16px 17px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Heading
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="60px"
        position="relative"
        padding="0px 0px 0px 0px"
        level="1"
        children="Coffee History"
        {...getOverrideProps(overrides, "Heading35462690")}
      ></Heading>
      <SearchBar
        display="flex"
        gap="10px"
        direction="column"
        width="385px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="88px"
        position="relative"
        padding="24px 16px 24px 16px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SearchBar")}
      ></SearchBar>
      <Flex
        padding="0px 0px 0px 0px"
        width="158px"
        height="64px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Heading
          display="flex"
          gap="0"
          position="absolute"
          top="22px"
          left="0px"
          padding="0px 0px 0px 0px"
          level="6"
          children="username"
          {...getOverrideProps(overrides, "Heading35462692")}
        ></Heading>
        <Image
          width="64px"
          height="64px"
          position="absolute"
          top="0px"
          left="94px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "weird_profile 1")}
        ></Image>
      </Flex>
    </Flex>
  );
}
