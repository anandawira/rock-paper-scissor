const options = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  const index = Math.floor(Math.random() * options.length);
  return index;
}

function playRound(playerSelectionIndex, computerSelectionIndex) {
  if (playerSelectionIndex == computerSelectionIndex) {
    return `Its a Draw! you both picked ${options[playerSelectionIndex]}`;
  } else if ((playerSelectionIndex + 1) % 3 == computerSelectionIndex) {
    return `You Lose! ${options[computerSelectionIndex]} beats ${options[playerSelectionIndex]}`;
  } else {
    return `You Win! ${options[playerSelectionIndex]} beats ${options[computerSelectionIndex]}`;
  }
}
