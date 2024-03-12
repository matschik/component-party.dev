import UserProfile from "./user-profile.gjs";

const favoriteColors = ["green", "blue", "red"];

<template>
  <UserProfile
    @name="John"
    @age={{20}}
    @favouriteColors={{favoriteColors}}
    @isAvailable={{true}}
  />
</template>