let alunos = [
  { nome: "Eduardo", notaUm: 5.5, notaDois: 6 },
  { nome: "Cristina", notaUm: 7.5, notaDois: 9 },
  { nome: "João", notaUm: 9.5, notaDois: 7.3 },
  { nome: "Pedro", notaUm: 10, notaDois: 8 },
];

function media(notaUm, notaDois) {
  return (notaUm + notaDois) / 2;
}

alunos.forEach((aluno) => {
  mediaAluno = media(aluno.notaUm, aluno.notaDois);
  if (mediaAluno >= 7) {
    alert(
      `A média do(a) aluno(a) ${aluno.nome} é: ${mediaAluno}\nParabéns ${aluno.nome}! Você foi aprovado(a) no concurso!`
    );
  } else {
    alert(
      `A média do(a) aluno(a) ${aluno.nome} é: ${mediaAluno}\nNão foi dessa vez ${aluno.nome}! Tente novamente no próximo!`
    );
  }
});
