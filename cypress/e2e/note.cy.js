describe('Notes app', () => {
  
  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('visit notes app home', () => {
    cy.visit('/');
  });
  
  it('Should return empty notes message when there is not notes', () => {
    localStorage.setItem('notesList',"[]");
    cy.visit('/');

    cy.contains('There is no notes...Start creating your first note');
    
  })

  it('Should return notes in localstorage', () => {
    const notes = [{"id":1663468363113,"title":"Test Components","description":"With Cypress - Goncy Tutorial in youtube\n","isDone":false,"isPinned":false},{"id":1664159152860,"title":"Order by created date","description":"add order by created date","isDone":false,"isPinned":false},{"id":1663468445750,"title":"Add Pagination","description":"Add pagination functionality to notes app.","isDone":false,"isPinned":false},{"id":1663471131891,"title":"Implement Lazy load...","description":"... and suspense.\nhttps://midu.dev/curso-gratis-react-2020/","isDone":false,"isPinned":false},{"id":1663471737034,"title":"Deploy Notes App","description":"Deploy notes app first version ","isDone":false,"isPinned":false},{"id":1663472562271,"title":"Sort Notes - Drag n drop","description":"using https://github.com/clauderic/dnd-kit\n\n** to do later **","isDone":false,"isPinned":false},{"id":1664031721114,"title":"Add dark theme","description":"Add dark theme functionality","isDone":true,"isPinned":true},{"id":1663726038610,"title":"test context ","description":"implementation","isDone":true,"isPinned":true},{"id":1663635640031,"title":"Use context for notes","description":"and provider...","isDone":true,"isPinned":true},{"id":1663472964095,"title":"Required Inputs ","description":"In modal form. The easiest solution","isDone":true,"isPinned":false},{"id":1663468253490,"title":"Order notes by Status/Fav","description":"Filter notes by status and favorites","isDone":true,"isPinned":false},{"id":1663468305174,"title":"Style Forms","description":"Style modal forms (create/edit form in modal)...","isDone":true,"isPinned":false}]
    localStorage.setItem('notesList', JSON.stringify(notes));
    cy.visit('/');
    cy.get('[data-testid]').should('have.length', notes.length);
    
  })
})