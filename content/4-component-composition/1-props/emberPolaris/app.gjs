import UserProfile from "./user-profile.gjs";

<template>
  <UserProfile
    @name="John"
    @age={{20}}
    @favouriteColors={{Array "green" "blue" "red"}}
    @isAvailable={{true}}
  />
</template>
