
//a)

type Post = {
    autor: string,
    texto: string
}


const listaPosts: string[]  = []

   const personagem1: Post = {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    }
    const personagem2: Post = {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    }
    const personagem3: Post = {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    }
    const personagem4: Post = {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    }
    const personagem5: Post = {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  

  function buscarPostsPorAutor(posts: Post[], autorInformado:string): Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
