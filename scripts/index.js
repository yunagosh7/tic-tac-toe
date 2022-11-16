const container = document.getElementById("container");
const squares = document.querySelectorAll(".square");

const Player = (mark) => {
  let playerMark = mark;
  return {
    playerMark,
  };
};

const computer = Player("O");
const user = Player("X");

const gameBoard = ((squares, container, user) => {
   //* Click del usuario
  container.addEventListener("click", () => {
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", () => {
        squares[i].textContent = user.playerMark;
      });
    }
  });

  //* Click de la maquina
  for(let i = 0; i < squares.length; i++) {
   squares[i].textContent = computer.playerMark
  }


})(squares, container, user);

console.log(gameBoard);
