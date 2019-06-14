<template>
  <div class="times">
    <h1 class="subheading">Times</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="time in times" :key="time.nome">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="blue lighten-5">
                <img :src="time.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{time.nome}}
              </div>
              <div class="blue--text" v-for="jogador in time.jogadores" :key="jogador.nome">
                {{jogador.nome}}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="blue">
                <v-icon small left>add_circle_outline</v-icon>
                <span>Adicionar ao time</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [
        { nome: 'Chicago Bulls', jogadores: [{ nome: 'Derrick Rose' }, {nome: 'Anderson Varejao'}], avatar: '/avatar-1.png'},
        { nome: 'Los Angeles Lakers', jogadores: [{nome: 'Kobe Bryant'}, {nome: 'Chakile O`neal'}], avatar: '/avatar-2.png'},
        { nome: 'San Antonio Spurs', jogadores: [{nome: 'Tim Dunkun'}, {nome: 'Tony Parker'}], avatar: '/avatar-3.png'},
        { nome: 'Miami Heat', jogadores: [{nome: 'Le Bron James'}, {nome: 'Dwaine Wade'}], avatar: '/avatar-4.png'}
      ]
    };
  }
};
</script>