/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, Image, Rating, Text } from "@aws-amplify/ui-react";
export default function CoffeeEntry(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="11px"
      alignItems="flex-start"
      position="relative"
      padding="25px 8px 25px 8px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CoffeeEntry")}
    >
      <Image
        width="84px"
        height="81px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "coffee_template")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        width="152px"
        height="81px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "description")}
      >
        <Heading
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          level="4"
          children="Coffee name"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="29px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="nickname"
          {...getOverrideProps(overrides, "nickname")}
        ></Text>
        <Rating
          display="flex"
          gap="8px"
          position="absolute"
          top="57px"
          left="0px"
          alignItems="center"
          padding="0px 0px 0px 0px"
          size="default"
          {...getOverrideProps(overrides, "Rating")}
        ></Rating>
      </Flex>
    </Flex>
  );
}
