
# GRPC em Node

Protocol Buffers (também conhecido como protobuf) é um método de serialização de dados estruturados. É útil no desenvolvimento de programas que se comunicam uns com os outros ou para armazenar dados. O método envolve uma linguagem de descrição de interface que descreve a estrutura de dados e um programa que gera código-fonte a partir dessa descrição para a geração ou a análise de um fluxo de bytes que representa os dados estruturados.

As metas do design de Protocol Buffers enfatizaram a simplicidade e desempenho. Em particular, ele foi projetado para ser menor e mais rápido do que XML.

Protocol Buffers são amplamente utilizados pelo Google para o armazenamento e intercâmbio de vários tipos de informações estruturadas. O método serve como base para uma chamada de procedimento remoto (RPC) personalizada do sistema que é usado por quase todas as comunicações inter-máquina do Google.

Um desenvolvedor de software define estruturas de dados (chamadas de mensagens) e serviços em um arquivo de definição proto (.proto) e os compila com um programa chamado protoc. Esta compilação gera código que pode ser invocado por um remetente ou destinatário destas estruturas de dados. Por exemplo, exemplo.proto vai produzir exemplo.pb.cc e exemplo.pb.h, que irão implementar classes de C++ para cada mensagem definida em exemplo.proto.

Canonicamente, as mensagens são serializadas em um protocolo binário compacto, com compatibilidade reversa e direta, mas não são auto-descritivas (isto é, não há nenhuma maneira de saber os nomes, significados, ou tipos de dados dos campos de uma mensagem sem uma especificação externa). Não há nenhuma forma predefinida de incluir ou referir-se a essa especificação externa (esquema) dentro de um arquivo de Protocol Buffers. Implementações oficialmente suportadas incluem um formato de serialização em ASCII, mas este formato, embora auto-descritivo, perde o compatibilidade de comportamento reversa e direta, e não é, portanto, uma boa escolha para aplicações e deve ser usada somente para depuração.


## Instalação

Instale protobuf no ubuntu

```bash
    sudo snap install protobuf
    sudo apt install protobuf-compiler
```

Para gerar o arquivo protobuf entre na raiz do projeto e execute o comando abaixo.

```bash
    protoc --js_out=import_style=commonjs,binary:. proto/notes.proto
```

Isso vai fazer com que seja gerado o arquivo notes_pb.js 
## Uso/Exemplos
**Start o servidor para processamentos das request gRpc**

**Na raiz do projeto abra 2 terminais:**

- Terminal 01
    - Start
    ```bash
    node src/server.js
    ```

    - Response
    ```bash
    (node:172257) DeprecationWarning: grpc.load: Use the @grpc/proto-loader module with grpc.loadPackageDefinition instead
    (Use `node --trace-deprecation ...` to show where the warning was created)
    ```

- Terminal 02
    - Start
    ```bash
    node src/client.js
    ```

    - Response
    ```bash
    (node:172285) DeprecationWarning: grpc.load: Use the @grpc/proto-loader module with grpc.loadPackageDefinition instead
    (Use `node --trace-deprecation ...` to show where the warning was created)

    # Abaixo devolutiva do Add
    { id: '3', title: 'Note 3', description: 'Content 3' }

    # Abaixo devolutiva do Find
    { id: '1', title: 'Note 1', description: 'Content 1' }

    # Abaixo devolutiva do List
    {
        notes: [
            { id: '1', title: 'Note 1', description: 'Content 1' },
            { id: '2', title: 'Note 2', description: 'Content 2' },
            { id: '3', title: 'Note 3', description: 'Content 3' }
        ]
    }
    ```
    *obs: Devolutivas dependem do tempo de processamento da promise, por isso list e a ultima mesmo sendo executada primeiro*

**Para ver o processo do proto funcionando de modo simples rode o comando abaixo:**

- Terminal 01
    - Start
    ```bash
    node proto/note.js
    ```

    - Response
    ```bash
    ---------------------------------------------
    ~ note {
    wrappers_: null,
    messageId_: undefined,
    arrayIndexOffset_: -1,
    array: [ 'id-123', 'title', 'description' ],
    pivot_: 1.7976931348623157e+308,
    convertedPrimitiveFields_: {}
    }
    ---------------------------------------------
    ~ serializedNote Uint8Array(28) [
    10,   6, 105, 100,  45,  49,  50,
    51,  18,   5, 116, 105, 116, 108,
    101,  26,  11, 100, 101, 115,  99,
    114, 105, 112, 116, 105, 111, 110
    ]
    ---------------------------------------------
    ~ deserialized {
    wrappers_: null,
    messageId_: undefined,
    arrayIndexOffset_: -1,
    array: [ 'id-123', 'title', 'description' ],
    pivot_: 1.7976931348623157e+308,
    convertedPrimitiveFields_: {}
    }
    ---------------------------------------------
    ```
## Referência

 - [O guia completo do gRPC parte 1: O que é gRPC?](https://blog.lsantos.dev/guia-grpc-1/#o-guia-completo-do-grpc-parte-1-o-que-%C3%A9-grpc)

