import { PrismaClient } from '@prisma/client';
import { Countries } from './data/countries.js';
import { Disciplines } from './data/disciplines.js';
import { Topics } from './data/topics.js';

const prisma = new PrismaClient({
	log: ['error']
});

async function main() {
	try {
		await Promise.all(
			Countries.map(async (country) =>
				prisma.country.create({
					data: {
						code: country.id,
						name: country.name
					}
				})
			)
		);

		await Promise.all(
			Disciplines.map(async (discipline) =>
				prisma.callDiscipline.create({
					data: {
						id: discipline.id,
						name: discipline.name,
						order: discipline.id
					}
				})
			)
		);

		await Promise.all(
			Topics.map(async (topic) =>
				prisma.callTopic.create({
					data: {
						id: topic.id,
						name: topic.name,
						order: topic.id
					}
				})
			)
		);
	} catch (err) {
		console.log('prisma seed err', err);
		throw err;
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
