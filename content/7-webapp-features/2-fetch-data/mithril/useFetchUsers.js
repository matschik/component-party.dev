import m from "mithril";

export const fetchUsers = (isLoading, onSuccess, onError) => {
  isLoading = true;
  m.request("https://randomuser.me/api/?results=3").then(
    (data) => {
      isLoading = false;
      onSuccess(data);
    },
    (err) => {
      isLoading = false;
      onError(err);
    }
  );
};
