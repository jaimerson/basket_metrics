<template>
  <div class="inicio">
    <h1 class="subheading">Inicio</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat @click="sortBy('nome')" slot="activator">
            <v-icon left small>ac_unit</v-icon>
            <span class="caption text-lowercase">Por Nome da Partida</span>
          </v-btn>
          <span>Ordenar partidas por Nome</span>
        </v-tooltip>
        <v-tooltip top>
        <v-btn small flat @click="sortBy('status')" slot="activator">
          <v-icon left small>group</v-icon>
          <span class="caption text-lowercase">Por Status</span>
        </v-btn>
        <span>Ordenar partidas por status</span>
        </v-tooltip>
      </v-layout>
      <v-card v-for="partida in partidas" :key="partida.nome">
        <v-layout row wrap :class="`pa-3 partida ${partida.status}`">
          <v-flex xs12 md6>
            <div class="caption">Partida</div>
            <div>{{partida.nome}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Times</div>
            <div v-for="time in partida.times" :key="time.nome">{{time.nome}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption">Data</div>
            <div>{{partida.data}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${partida.status} white--text my-2 caption`">{{partida.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partidas: [
        {
          nome: "001 - Bulls vs Celtics",
          times: [{ nome: "Chicago Bulls" }, { nome: "Boston Celtics" }],
          data: "01 de Janeiro de 2019",
          status: "jogando",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          nome: "002 - Warriors vs Nuggets",
          times: [
            { nome: "Golden State Warriors" },
            { nome: "Denver Nuggets" }
          ],
          data: "10 de Janeiro de 2019",
          status: "agendado",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          nome: "003 - Lakers vs Spurs",
          times: [
            { nome: "Los Angeles Lakers" },
            { nome: "San Antonio Spurs" }
          ],
          data: "20 de Dezembro de 2018",
          status: "final",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          nome: "004 - Rockets vs Clippers",
          times: [
            { nome: "Houston Rockets" },
            { nome: "Los Angeles Clippers" }
          ],
          data: "20 de Outubro de 2018",
          status: "final",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.partidas.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style>
.partida.final {
  border-left: 4px solid #3cd1c2;
}
.partida.jogando {
  border-left: 4px solid orange;
}
.partida.agendado {
  border-left: 4px solid blue;
}
.v-chip.final {
  background: #3cd1c2;
}
.v-chip.jogando {
  background: #ffaa2c;
}
.v-chip.agendado {
  background: #1e88e5;
}
</style>

