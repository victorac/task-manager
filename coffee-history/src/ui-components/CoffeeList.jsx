/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CoffeeEntry from "./CoffeeEntry";
import { Divider, Flex } from "@aws-amplify/ui-react";
export default function CoffeeList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="18px"
      direction="column"
      alignItems="center"
      position="relative"
      padding="29px 58px 29px 58px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CoffeeList")}
    >
      <CoffeeEntry
        display="flex"
        gap="11px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="25px 8px 25px 8px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CoffeeEntry")}
      ></CoffeeEntry>
      <Divider
        width="150px"
        height="1px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </Flex>
  );
}
