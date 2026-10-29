card.setAttribute('draggable', 'true');
card.setAttribute('id', cardId);
card.ondragstart = drag;
card.innerHTML = <div class="card-content">${taskText}</div> <div class="card-footer"> <span>${tagText.startsWith('#') ? tagText : '#' + tagText}</span> <button class="delete-btn" onclick="deleteCard('${cardId}')">Excluir</button> </div>;
container.appendChild(card);

// Excluir Cartão
function deleteCard(cardId) {
if(confirm("Tem certeza que deseja excluir esta tarefa?")) {
const card = document.getElementById(cardId);
if (card) card.remove();
}
}
