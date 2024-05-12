import React, { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Option, Select, Stack } from '@mui/joy';
import TextField from '@mui/material/TextField';

import JobsCard from '../../Components/JobsCard/JobsCard';
import CustomAutoComplete from '../../Components/CustomAutoComplete/CustomAutoComplete';
import { css } from '@emotion/react';
import InfiniteScroll from 'react-infinite-scroll-component';
let jobs = [
  {
    jdUid: 'cfff35ac-053c-11ef-83d3-06301d0a7178-92010',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 61,
    minJdSalary: null,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 3,
    maxExp: 6,
    jobRole: 'frontend',
    companyName: 'Dropbox',
    logoUrl: 'https://logo.clearbit.com/dropbox.com',
  },
  {
    jdUid: 'cfff35ba-053c-11ef-83d3-06301d0a7178-92012',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 100,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: null,
    maxExp: null,
    jobRole: 'ios',
    companyName: 'LG',
    logoUrl: 'https://logo.clearbit.com/lg.com',
  },
  {
    jdUid: 'cfff35d4-053c-11ef-83d3-06301d0a7178-92016',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 28,
    minJdSalary: 26,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 2,
    maxExp: 11,
    jobRole: 'android',
    companyName: 'Sony',
    logoUrl: 'https://logo.clearbit.com/sony.com',
  },
  {
    jdUid: 'cfff35e1-053c-11ef-83d3-06301d0a7178-92018',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 45,
    minJdSalary: 35,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 5,
    maxExp: 6,
    jobRole: 'tech lead',
    companyName: 'Adobe Systems',
    logoUrl: 'https://logo.clearbit.com/adobe.com',
  },
  {
    jdUid: 'cfff35ed-053c-11ef-83d3-06301d0a7178-92020',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 48,
    minJdSalary: 26,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 1,
    maxExp: 8,
    jobRole: 'frontend',
    companyName: 'HP',
    logoUrl: 'https://logo.clearbit.com/hp.com',
  },
  {
    jdUid: 'cfff35fb-053c-11ef-83d3-06301d0a7178-92022',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 19,
    minJdSalary: 15,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 8,
    maxExp: 9,
    jobRole: 'ios',
    companyName: 'eBay',
    logoUrl: 'https://logo.clearbit.com/ebay.com',
  },
  {
    jdUid: 'cfff3608-053c-11ef-83d3-06301d0a7178-92024',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 78,
    minJdSalary: 64,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 7,
    maxExp: 15,
    jobRole: 'backend',
    companyName: 'Tencent',
    logoUrl: 'https://logo.clearbit.com/tencent.com',
  },
  {
    jdUid: 'cfff3614-053c-11ef-83d3-06301d0a7178-92026',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 5,
    minJdSalary: 3,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 3,
    maxExp: 12,
    jobRole: 'android',
    companyName: 'Apple',
    logoUrl: 'https://logo.clearbit.com/apple.com',
  },
  {
    jdUid: 'cfff3621-053c-11ef-83d3-06301d0a7178-92028',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 33,
    minJdSalary: 23,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 1,
    maxExp: 5,
    jobRole: 'tech lead',
    companyName: 'Asus',
    logoUrl: 'https://logo.clearbit.com/asus.com',
  },
  {
    jdUid: 'cfff362e-053c-11ef-83d3-06301d0a7178-92030',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 83,
    minJdSalary: 61,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 6,
    maxExp: 11,
    jobRole: 'frontend',
    companyName: 'Intel Corporation',
    logoUrl: 'https://logo.clearbit.com/intel.com',
  },
  {
    jdUid: 'cfff363b-053c-11ef-83d3-06301d0a7178-92032',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 86,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 10,
    maxExp: 15,
    jobRole: 'ios',
    companyName: 'Rakuten',
    logoUrl: 'https://logo.clearbit.com/rakuten.com',
  },
  {
    jdUid: 'cfff3648-053c-11ef-83d3-06301d0a7178-92034',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 64,
    minJdSalary: 25,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 2,
    maxExp: 11,
    jobRole: 'backend',
    companyName: 'Samsung',
    logoUrl: 'https://logo.clearbit.com/samsung.com',
  },
  {
    jdUid: 'cfff3655-053c-11ef-83d3-06301d0a7178-92036',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 37,
    minJdSalary: 3,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 3,
    maxExp: 11,
    jobRole: 'android',
    companyName: 'Apple',
    logoUrl: 'https://logo.clearbit.com/apple.com',
  },
  {
    jdUid: 'cfff3662-053c-11ef-83d3-06301d0a7178-92038',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 62,
    minJdSalary: 31,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 9,
    maxExp: 12,
    jobRole: 'tech lead',
    companyName: 'Dell Technologies',
    logoUrl: 'https://logo.clearbit.com/dell.com',
  },
  {
    jdUid: 'cfff3763-053c-11ef-83d3-06301d0a7178-92040',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 69,
    minJdSalary: 48,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 10,
    maxExp: 11,
    jobRole: 'frontend',
    companyName: 'Dropbox',
    logoUrl: 'https://logo.clearbit.com/dropbox.com',
  },
  {
    jdUid: 'cfff3cd9-053c-11ef-83d3-06301d0a7178-92042',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 101,
    minJdSalary: 100,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 10,
    maxExp: 18,
    jobRole: 'ios',
    companyName: 'Intel Corporation',
    logoUrl: 'https://logo.clearbit.com/intel.com',
  },
  {
    jdUid: 'cfff3cf9-053c-11ef-83d3-06301d0a7178-92044',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 79,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 10,
    maxExp: 11,
    jobRole: 'backend',
    companyName: 'Cisco',
    logoUrl: 'https://logo.clearbit.com/cisco.com',
  },
  {
    jdUid: 'cfff3d09-053c-11ef-83d3-06301d0a7178-92046',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 16,
    minJdSalary: 10,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 10,
    maxExp: 15,
    jobRole: 'android',
    companyName: 'Oracle',
    logoUrl: 'https://logo.clearbit.com/oracle.com',
  },
  {
    jdUid: 'cfff3d16-053c-11ef-83d3-06301d0a7178-92048',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 93,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 3,
    maxExp: 11,
    jobRole: 'tech lead',
    companyName: 'Baidu',
    logoUrl: 'https://logo.clearbit.com/baidu.com',
  },
  {
    jdUid: 'cfff3d23-053c-11ef-83d3-06301d0a7178-92050',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 33,
    minJdSalary: 13,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 3,
    maxExp: 3,
    jobRole: 'frontend',
    companyName: 'Amazon',
    logoUrl: 'https://logo.clearbit.com/amazon.com',
  },
  {
    jdUid: 'cfff359f-053c-11ef-83d3-06301d0a7178-92008',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: null,
    minJdSalary: 44,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 7,
    maxExp: 14,
    jobRole: 'tech lead',
    companyName: 'Olympus',
    logoUrl: 'https://logo.clearbit.com/olympus.com',
  },
  {
    jdUid: 'cfff3d31-053c-11ef-83d3-06301d0a7178-92052',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 78,
    minJdSalary: 48,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 4,
    maxExp: 8,
    jobRole: 'ios',
    companyName: 'Alibaba',
    logoUrl: 'https://logo.clearbit.com/alibaba.com',
  },
  {
    jdUid: 'cfff3d3e-053c-11ef-83d3-06301d0a7178-92054',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 102,
    minJdSalary: 76,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 8,
    maxExp: 8,
    jobRole: 'backend',
    companyName: 'GoPro',
    logoUrl: 'https://logo.clearbit.com/gopro.com',
  },
  {
    jdUid: 'cfff3d4b-053c-11ef-83d3-06301d0a7178-92056',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 91,
    minJdSalary: 62,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 9,
    maxExp: 10,
    jobRole: 'android',
    companyName: 'Twitter',
    logoUrl: 'https://logo.clearbit.com/twitter.com',
  },
  {
    jdUid: 'cfff3d58-053c-11ef-83d3-06301d0a7178-92058',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 57,
    minJdSalary: 32,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 9,
    maxExp: 14,
    jobRole: 'tech lead',
    companyName: 'ZTE',
    logoUrl: 'https://logo.clearbit.com/zte.com.cn',
  },
  {
    jdUid: 'cfff3d65-053c-11ef-83d3-06301d0a7178-92060',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 22,
    minJdSalary: 9,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 10,
    maxExp: 10,
    jobRole: 'frontend',
    companyName: 'ZTE',
    logoUrl: 'https://logo.clearbit.com/zte.com.cn',
  },
  {
    jdUid: 'cfff3d72-053c-11ef-83d3-06301d0a7178-92062',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 98,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 9,
    maxExp: 11,
    jobRole: 'ios',
    companyName: 'Netflix',
    logoUrl: 'https://logo.clearbit.com/netflix.com',
  },
  {
    jdUid: 'cfff3d7f-053c-11ef-83d3-06301d0a7178-92064',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 22,
    minJdSalary: 6,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 2,
    maxExp: 3,
    jobRole: 'backend',
    companyName: 'MasterCard',
    logoUrl: 'https://logo.clearbit.com/mastercard.com',
  },
  {
    jdUid: 'cfff3d8b-053c-11ef-83d3-06301d0a7178-92066',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 50,
    minJdSalary: 36,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 1,
    maxExp: 1,
    jobRole: 'android',
    companyName: 'Facebook',
    logoUrl: 'https://logo.clearbit.com/facebook.com',
  },
  {
    jdUid: 'cfff3d98-053c-11ef-83d3-06301d0a7178-92068',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 90,
    minJdSalary: 55,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 5,
    maxExp: 8,
    jobRole: 'tech lead',
    companyName: 'HP',
    logoUrl: 'https://logo.clearbit.com/hp.com',
  },
  {
    jdUid: 'cfff3da5-053c-11ef-83d3-06301d0a7178-92070',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 44,
    minJdSalary: 9,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 1,
    maxExp: 1,
    jobRole: 'frontend',
    companyName: 'LG',
    logoUrl: 'https://logo.clearbit.com/lg.com',
  },
  {
    jdUid: 'cfff3db1-053c-11ef-83d3-06301d0a7178-92072',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 35,
    minJdSalary: 34,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 5,
    maxExp: 7,
    jobRole: 'ios',
    companyName: 'Dell Technologies',
    logoUrl: 'https://logo.clearbit.com/dell.com',
  },
  {
    jdUid: 'cfff3dbe-053c-11ef-83d3-06301d0a7178-92074',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 71,
    minJdSalary: 60,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 3,
    maxExp: 9,
    jobRole: 'backend',
    companyName: 'Tencent',
    logoUrl: 'https://logo.clearbit.com/tencent.com',
  },
  {
    jdUid: 'cfff3dcb-053c-11ef-83d3-06301d0a7178-92076',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 102,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 1,
    maxExp: 3,
    jobRole: 'android',
    companyName: 'MasterCard',
    logoUrl: 'https://logo.clearbit.com/mastercard.com',
  },
  {
    jdUid: 'cfff3dd8-053c-11ef-83d3-06301d0a7178-92078',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 19,
    minJdSalary: 19,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 5,
    maxExp: 12,
    jobRole: 'tech lead',
    companyName: 'IBM',
    logoUrl: 'https://logo.clearbit.com/ibm.com',
  },
  {
    jdUid: 'cfff3de5-053c-11ef-83d3-06301d0a7178-92080',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 63,
    minJdSalary: 52,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 7,
    maxExp: 12,
    jobRole: 'frontend',
    companyName: 'Intel',
    logoUrl: 'https://logo.clearbit.com/intel.com',
  },
  {
    jdUid: 'cfff4360-053c-11ef-83d3-06301d0a7178-92082',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 87,
    minJdSalary: 86,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 9,
    maxExp: 11,
    jobRole: 'ios',
    companyName: 'Google',
    logoUrl: 'https://logo.clearbit.com/google.com',
  },
  {
    jdUid: 'cfff437e-053c-11ef-83d3-06301d0a7178-92084',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 24,
    minJdSalary: 16,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 7,
    maxExp: 16,
    jobRole: 'backend',
    companyName: 'Huawei',
    logoUrl: 'https://logo.clearbit.com/huawei.com',
  },
  {
    jdUid: 'cfff438e-053c-11ef-83d3-06301d0a7178-92086',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 56,
    minJdSalary: 26,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 1,
    maxExp: 1,
    jobRole: 'android',
    companyName: 'HP',
    logoUrl: 'https://logo.clearbit.com/hp.com',
  },
  {
    jdUid: 'cfff439b-053c-11ef-83d3-06301d0a7178-92088',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 91,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 4,
    maxExp: 8,
    jobRole: 'tech lead',
    companyName: 'Dell Technologies',
    logoUrl: 'https://logo.clearbit.com/dell.com',
  },
  {
    jdUid: 'cfff43a8-053c-11ef-83d3-06301d0a7178-92090',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 77,
    minJdSalary: 57,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 10,
    maxExp: 16,
    jobRole: 'frontend',
    companyName: 'MasterCard',
    logoUrl: 'https://logo.clearbit.com/mastercard.com',
  },
  {
    jdUid: 'cfff43b5-053c-11ef-83d3-06301d0a7178-92092',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 44,
    minJdSalary: 26,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 3,
    maxExp: 12,
    jobRole: 'ios',
    companyName: 'Adobe',
    logoUrl: 'https://logo.clearbit.com/adobe.com',
  },
  {
    jdUid: 'cfff35c7-053c-11ef-83d3-06301d0a7178-92014',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 28,
    minJdSalary: 5,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: null,
    maxExp: 6,
    jobRole: 'backend',
    companyName: 'Dropbox',
    logoUrl: 'https://logo.clearbit.com/dropbox.com',
  },
  {
    jdUid: 'cfff43c3-053c-11ef-83d3-06301d0a7178-92094',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 93,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 6,
    maxExp: 13,
    jobRole: 'backend',
    companyName: 'Twitter',
    logoUrl: 'https://logo.clearbit.com/twitter.com',
  },
  {
    jdUid: 'cfff43d0-053c-11ef-83d3-06301d0a7178-92096',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 39,
    minJdSalary: 35,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 8,
    maxExp: 17,
    jobRole: 'android',
    companyName: 'Google',
    logoUrl: 'https://logo.clearbit.com/google.com',
  },
  {
    jdUid: 'cfff43dd-053c-11ef-83d3-06301d0a7178-92098',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 51,
    minJdSalary: 46,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 7,
    maxExp: 10,
    jobRole: 'tech lead',
    companyName: 'Intel Corporation',
    logoUrl: 'https://logo.clearbit.com/intel.com',
  },
  {
    jdUid: 'cfff44d7-053c-11ef-83d3-06301d0a7178-92100',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 62,
    minJdSalary: 35,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 7,
    maxExp: 14,
    jobRole: 'frontend',
    companyName: 'Rakuten',
    logoUrl: 'https://logo.clearbit.com/rakuten.com',
  },
  {
    jdUid: 'cfff44e6-053c-11ef-83d3-06301d0a7178-92102',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 101,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 9,
    maxExp: 13,
    jobRole: 'ios',
    companyName: 'Pandora',
    logoUrl: 'https://logo.clearbit.com/pandora.com',
  },
  {
    jdUid: 'cfff44f4-053c-11ef-83d3-06301d0a7178-92104',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 33,
    minJdSalary: 3,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 5,
    maxExp: 6,
    jobRole: 'backend',
    companyName: 'LG',
    logoUrl: 'https://logo.clearbit.com/lg.com',
  },
  {
    jdUid: 'cfff4501-053c-11ef-83d3-06301d0a7178-92106',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 60,
    minJdSalary: 33,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 10,
    maxExp: 16,
    jobRole: 'android',
    companyName: 'Asus',
    logoUrl: 'https://logo.clearbit.com/asus.com',
  },
  {
    jdUid: 'cfff450e-053c-11ef-83d3-06301d0a7178-92108',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 67,
    minJdSalary: 36,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 8,
    maxExp: 10,
    jobRole: 'tech lead',
    companyName: 'HP',
    logoUrl: 'https://logo.clearbit.com/hp.com',
  },
  {
    jdUid: 'cfff451b-053c-11ef-83d3-06301d0a7178-92110',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 38,
    minJdSalary: 32,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 1,
    maxExp: 5,
    jobRole: 'frontend',
    companyName: 'IBM',
    logoUrl: 'https://logo.clearbit.com/ibm.com',
  },
  {
    jdUid: 'cfff4527-053c-11ef-83d3-06301d0a7178-92112',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 91,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 9,
    maxExp: 15,
    jobRole: 'ios',
    companyName: 'LG',
    logoUrl: 'https://logo.clearbit.com/lg.com',
  },
  {
    jdUid: 'cfff4534-053c-11ef-83d3-06301d0a7178-92114',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 58,
    minJdSalary: 24,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 8,
    maxExp: 14,
    jobRole: 'backend',
    companyName: 'Dropbox',
    logoUrl: 'https://logo.clearbit.com/dropbox.com',
  },
  {
    jdUid: 'cfff4541-053c-11ef-83d3-06301d0a7178-92116',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 66,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 7,
    maxExp: 15,
    jobRole: 'android',
    companyName: 'Samsung',
    logoUrl: 'https://logo.clearbit.com/samsung.com',
  },
  {
    jdUid: 'cfff454d-053c-11ef-83d3-06301d0a7178-92118',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 27,
    minJdSalary: 21,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 4,
    maxExp: 6,
    jobRole: 'tech lead',
    companyName: 'Nikon',
    logoUrl: 'https://logo.clearbit.com/nikon.com',
  },
  {
    jdUid: 'cfff455a-053c-11ef-83d3-06301d0a7178-92120',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 44,
    minJdSalary: 5,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 4,
    maxExp: 4,
    jobRole: 'frontend',
    companyName: 'Lyft',
    logoUrl: 'https://logo.clearbit.com/lyft.com',
  },
  {
    jdUid: 'cfff4ae3-053c-11ef-83d3-06301d0a7178-92122',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 81,
    minJdSalary: 69,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 5,
    maxExp: 12,
    jobRole: 'ios',
    companyName: 'GoPro',
    logoUrl: 'https://logo.clearbit.com/gopro.com',
  },
  {
    jdUid: 'cfff4b09-053c-11ef-83d3-06301d0a7178-92124',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 38,
    minJdSalary: 18,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 8,
    maxExp: 17,
    jobRole: 'backend',
    companyName: 'Samsung',
    logoUrl: 'https://logo.clearbit.com/samsung.com',
  },
  {
    jdUid: 'cfff4b19-053c-11ef-83d3-06301d0a7178-92126',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 59,
    minJdSalary: 58,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 9,
    maxExp: 12,
    jobRole: 'android',
    companyName: 'Spotify',
    logoUrl: 'https://logo.clearbit.com/spotify.com',
  },
  {
    jdUid: 'cfff4b26-053c-11ef-83d3-06301d0a7178-92128',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 20,
    minJdSalary: 14,
    salaryCurrencyCode: 'USD',
    location: 'chennai',
    minExp: 8,
    maxExp: 9,
    jobRole: 'tech lead',
    companyName: 'PayPal',
    logoUrl: 'https://logo.clearbit.com/paypal.com',
  },
  {
    jdUid: 'cfff4b33-053c-11ef-83d3-06301d0a7178-92130',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 103,
    minJdSalary: 92,
    salaryCurrencyCode: 'USD',
    location: 'delhi ncr',
    minExp: 9,
    maxExp: 16,
    jobRole: 'frontend',
    companyName: 'Visa',
    logoUrl: 'https://logo.clearbit.com/visa.com',
  },
  {
    jdUid: 'cfff4b40-053c-11ef-83d3-06301d0a7178-92132',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 87,
    minJdSalary: 49,
    salaryCurrencyCode: 'USD',
    location: 'mumbai',
    minExp: 10,
    maxExp: 17,
    jobRole: 'ios',
    companyName: 'Facebook',
    logoUrl: 'https://logo.clearbit.com/facebook.com',
  },
  {
    jdUid: 'cfff4b4e-053c-11ef-83d3-06301d0a7178-92134',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 88,
    minJdSalary: 49,
    salaryCurrencyCode: 'USD',
    location: 'bangalore',
    minExp: 2,
    maxExp: 2,
    jobRole: 'backend',
    companyName: 'PayPal',
    logoUrl: 'https://logo.clearbit.com/paypal.com',
  },
  {
    jdUid: 'cfff4b5a-053c-11ef-83d3-06301d0a7178-92136',
    jdLink: 'https://weekday.works',
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    maxJdSalary: 6,
    minJdSalary: 3,
    salaryCurrencyCode: 'USD',
    location: 'remote',
    minExp: 9,
    maxExp: 9,
    jobRole: 'android',
    companyName: 'Adobe Inc.',
    logoUrl: 'https://logo.clearbit.com/adobe.com',
  },
];
const Layout = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMoreData, setHasMoreData] = React.useState(true);
  const [filters, setFilters] = useState({});
  const [filteredJobs, setFilteredJobs] = useState(jobs.slice(0, 10));
  const itemsPerPage = 10;

  const styles = css({
    padding: 5,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      padding: 0,
    },
  });
  //function for filters
  const filterJobs = useMemo(() => {
    return job => {
      return Object.entries(filters).every(([key, value]) => {
        if (Array.isArray(value)) {
          return value.includes(job[key]);
        } else {
          return value === undefined || value === null || job[key] === value;
        }
      });
    };
  }, [filters]);

  function handleFilterChange(filterKey, value) {
    if (value === null || value === undefined || value.length === 0) {
      setFilters(prevFilters => {
        const updatedFilters = { ...prevFilters };
        delete updatedFilters[filterKey];
        return updatedFilters;
      });
    } else {
      setFilters(prevFilters => ({ ...prevFilters, [filterKey]: value }));
    }
  }

  useEffect(() => {
    const updatedFilteredJobs = jobs.filter(filterJobs);
    setFilteredJobs(updatedFilteredJobs);
  }, [filters]);
  //values for drop downs
  const jobroles = ['frontend', 'backend', 'android', 'ios'];
  const exp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const location = [
    'remote',
    'delhi ncr',
    'mumbai',
    'chennai',
    'bangalore',
    'chennai',
  ];
  const basePay = [3, 9, 10, 14, 16, 18, 26, 33, 34, 35, 44, 72, 66, 100, 102];
  //function for infinite scroll
  const handleScroll = () => {
    const startIndex = (currentPage + 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (startIndex < jobs.length && hasMoreData) {
      const nextPageItems = jobs.slice(startIndex, endIndex);

      setFilteredJobs(prevJobs => [...prevJobs, ...nextPageItems]);

      setCurrentPage(prevPage => prevPage + 1);
    } else {
      setHasMoreData(false);
    }
  };
  return (
    <Grid>
      <Stack direction='row' flex={'wrap'}>
        <CustomAutoComplete
          multiple
          size='md'
          key='roles'
          placeholder='Roles'
          sx={{ mr: 2 }}
          options={jobroles}
          getOptionLabel={option => option}
          onChange={(event, newValue) => {
            handleFilterChange('jobRole', newValue);
          }}
        />
        <Select
          placeholder='Select Minimum Experience'
          size='sm'
          key='minExp'
          endDecorator={'|'}
          sx={{ mr: 2 }}
          onChange={(event, newValue) => {
            handleFilterChange('minExp', newValue);
          }}
        >
          {exp.map(exper => (
            <Option value={exper}>{exper}</Option>
          ))}
        </Select>
        <CustomAutoComplete
          multiple
          size='md'
          placeholder='Location'
          key='Location'
          options={location}
          sx={{ mr: 2 }}
          getOptionLabel={option => option}
          onChange={(event, newValue) => {
            handleFilterChange('location', newValue);
          }}
        />
        <Select
          placeholder='Min Base Pay '
          size='sm'
          key='minJdSalary  '
          endDecorator={'|'}
          sx={{ mr: 2 }}
          onChange={(event, newValue) => {
            handleFilterChange('minJdSalary', newValue);
          }}
        >
          {basePay.map(basePay => (
            <Option value={basePay}>{basePay}L</Option>
          ))}
        </Select>
        <TextField
          id='outlined-basic'
          placeholder='Search company Name'
          variant='outlined'
          size='small'
          sx={{ mr: 2 }}
          onChange={event => {
            handleFilterChange('companyName', event.target.value);
          }}
        />
      </Stack>
      <InfiniteScroll
        dataLength={65}
        next={handleScroll}
        hasMore={true}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <Box item md={12} sx={styles}>
          {filteredJobs?.map(jd => (
            <JobsCard key={jd.jdUid} jobDetails={jd} />
          ))}
        </Box>
      </InfiniteScroll>
    </Grid>
  );
};

export default Layout;
