import useSWR from 'swr';
import { client } from "../contentful/client";


const response = await client.getEntries({ content_type: "blogPosts" });
return response.items;