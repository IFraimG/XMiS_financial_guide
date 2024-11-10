<template>
  <div class="page__wrapper">
    <div class="page">
      <div class="page__content">
        <div class="header__wrapper">
          <div class="header">
            <custom-header />
          </div>
        </div>
        <div class="financy__wrapper">
          <div class="financy">
            <div class="content__wrapper financy__content">
              <h1 class="financy__title">Анализ доходов</h1>
              <div class="financy__graph">
                <div class="financy__graph-left">
                  <div class="financy__graph-wrapper">
                    <Line class="financy__graph-item" :data="testChartData" :options="options1" />
                  </div>
                  <div class="financy__graph-wrapper">
                    <Line class="financy__graph-item" :data="testChartData2" :options="options2" />
                  </div>
                </div>
                <FinancyAds />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomHeader from '@/components/feature_main/CustomHeader.vue'
import CustomFooter from '@/components/feature_main/CustomFooter.vue'
import MainCard from '@/components/feature_main/MainCard.vue'
import FinancyAds from '@/components/feature_financy/FinancyAds.vue'
import '@/assets/styles/feature_financy/financy_main.scss'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { options1, options2 } from '@/utils/chartSettings'

const labels = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const testChartData = {
  labels: labels,
  datasets: [
    {
      label: 'Доходы по месяцам',
      backgroundColor: '#0A2896',
      borderColor: '#0A2896',
      data: [
        200000, 150000, 230000, 210000, 410000, 290000, 270000, 380000, 390000, 210000, 330000,
        360000,
      ],
    },
  ],
}

const testChartData2 = {
  labels: labels,
  datasets: [
    {
      label: 'Сколько можно было заработать, инвестируя? +34%',
      backgroundColor: '#00AAFF',
      borderColor: '#00AAFF',
      data: [
        200000, 180000, 300000, 250000, 410000, 330000, 300000, 400000, 410000, 230000, 340000, 400000,
      ],
    },
    {
      label: '',
      backgroundColor: '#DAE1FA',
      borderColor: '#DAE1FA',
      data: [
        200000, 150000, 230000, 210000, 410000, 290000, 270000, 380000, 390000, 210000, 330000,360000,
      ],
    },
  ],
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
</script>