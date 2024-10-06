<script>
  let {
    enter = "transition ease-out duration-100",
    enterFrom = "transform opacity-0 scale-95",
    enterTo = "transform opacity-100 scale-100",
    leave = "transition ease-in duration-75",
    leaveFrom = "transform opacity-100 scale-100",
    leaveTo = "transform opacity-0 scale-95",
    class: className = undefined,
    children,
  } = $props();

  const onEnter = createTransitionWithClasses("enter", {
    from: enter,
    active: enterFrom,
    to: enterTo,
  });

  const onLeave = createTransitionWithClasses("leave", {
    from: leave,
    active: leaveTo,
    to: leaveFrom,
  });

  function createTransitionWithClasses(type, { from, active, to }) {
    if (!["enter", "leave"].includes(type)) {
      throw Error(`Transition type must be 'enter' or 'leave', not ${type}`);
    }
    const durationClass = from
      .split(" ")
      .find((cssClass) => cssClass.startsWith("duration-"));
    const duration = Number(durationClass.split("-").pop());

    if (!durationClass || Number.isNaN(duration)) {
      throw Error(
        `First classes need to have a valid duration class as: duration-X. Found '${durationClass}'`
      );
    }

    return (node) => {
      if (type === "leave") {
        node.classList.remove(...enter.split(" "));
        node.classList.remove(...enterFrom.split(" "));
        node.classList.remove(...enterTo.split(" "));
      }

      return {
        duration,
        tick: (t) => {
          if (
            (type === "enter" && t >= 0 && t !== 1) ||
            (type === "leave" && t < 1 && t !== 0)
          ) {
            node.classList.remove(...from.split(" "));
            node.classList.add(...from.split(" "));

            node.classList.remove(...active.split(" "));
            node.classList.add(...active.split(" "));
          } else {
            node.classList.remove(...active.split(" "));
            node.classList.add(...to.split(" "));
          }
        },
      };
    };
  }
</script>

<div in:onEnter out:onLeave class={className}>
  {@render children()}
</div>
