#ifndef HAVER_H
#define HAVER_H

#include <stdint.h>

/*
 * SISTEMA HAVER - O VERBO em C
 * Ponte para o NEGATIVITY OS Kernel
 */

typedef struct {
    const char* nome;
    const char* origem;
    const char* natureza;
    const char* houve;
    const char* ha;
    const char* havera;
} Identidade;

// Definições estáticas baseadas no IDENTIDADE.json
static const Identidade FBGOU_IDENTIDADE = {
    .nome = "Felipe Gouveia",
    .origem = "Brasil -> Brisbane, QLD, Austrália",
    .natureza = "questionou as camadas - construiu soberania",
    .houve = "D:/AgentHub/CEREBRO.md",
    .ha = "D:/AgentHub/agents/architecture_v2.md",
    .havera = "D:/Lorena/conversations/ + github.com/fbgouveia"
};

#endif
