function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <div className="card-curso">
      <h2>{nome}</h2>

      <p><strong>Duração:</strong> {duracao}</p>
      <p><strong>Modalidade:</strong> {modalidade}</p>
      <p><strong>Nível:</strong> {nivel}</p>

      {vagas > 0 ? (
        <p className="vagas">Vagas disponíveis: {vagas}</p>
      ) : (
        <p className="completa">Turma completa</p>
      )}
    </div>
  )
}

export default CardCurso
