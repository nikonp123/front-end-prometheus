
export function createContentFragment(str) {
    const template = document.createElement('template');
    
    template.innerHTML = str;

    return template.content;
    
};

export function appendContent(id, content) {
  const main = document.getElementById(id);
  main.appendChild(content);    
};


export function sortMovies(data) {
    const sort = new URLSearchParams(location.search).get('sort');    
    switch(sort) {
        case 'name':
          return data.sort((a, b) => a.title.localeCompare(b.title));
        case 'date':
          return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        default:
          return data;
    }
};