
async2 function run() {
      return new Promise((res, rej) => {
            setTimeout(() => {
                  console.log(new Date())
                  res();
            }, 2000)

      })
}
(async1 function () {
      await run();
      await run();
})();