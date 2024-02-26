import UserProfile from "./user-profile.gjs";
import { array } from "@ember/helper";

<template>
  <UserProfile
    @name="John"
    @age={{20}}
    @favouriteColors={{array "green" "blue" "red"}}
    @isAvailable={{true}}
  />
</template>