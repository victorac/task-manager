/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, SearchField, Text } from "@aws-amplify/ui-react";
export default function MyNavBar(props) {
  const { logoSrc, overrides, ...rest } = props;
  return (
    <Flex
      gap="107px"
      alignItems="center"
      position="relative"
      padding="33px 36px 33px 36px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyNavBar")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="239px"
        height="64px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="64px"
          height="64px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          src={logoSrc}
          {...getOverrideProps(overrides, "weird_logo 1")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          position="absolute"
          top="20px"
          left="75px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Tis my company logo"
          {...getOverrideProps(overrides, "Tis my company logo")}
        ></Text>
      </Flex>
      <Flex
        padding="0px 0px 0px 0px"
        width="478px"
        height="24px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Options")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Option Uno"
          {...getOverrideProps(overrides, "Option Uno")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          position="absolute"
          top="0px"
          left="195px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Option Dos"
          {...getOverrideProps(overrides, "Option Dos")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          position="absolute"
          top="0px"
          left="388px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Option Tres"
          {...getOverrideProps(overrides, "Option Tres")}
        ></Text>
      </Flex>
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        width="300px"
        shrink="0"
        height="40px"
        position="relative"
        padding="0px 0px 0px 0px"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Image
        width="64px"
        height="64px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "weird_profile 1")}
      ></Image>
    </Flex>
  );
}
