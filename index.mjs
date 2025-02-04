import axios from 'axios';
import { load } from 'cheerio';
import readline from 'node:readline';

async function fetchInstagramFollowers(targetUsername) {
  try {
    const url = `https://www.instagram.com/${targetUsername}/`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const html = response.data;
    const $ = load(html);
    const metaDescription = $('meta[property="og:description"]').attr('content');
    const followersMatch = metaDescription.match(/(\d+(,\d+)*) Followers/);

    if (followersMatch && followersMatch[1]) {
      const followersCount = followersMatch[1].replace(/,/g, '');
      console.log(`Jumlah pengikut ${targetUsername}: ${followersCount}`);
    } else {
      console.log(`Tidak dapat menemukan jumlah pengikut untuk ${targetUsername}`);
    }
  } catch (error) {
    console.error('Error fetching followers:', error);
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Pilih username yang ingin di stalk: ', username => {
  fetchInstagramFollowers(username);
  rl.close();
});

