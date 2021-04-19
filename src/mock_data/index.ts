import { icons, images } from '../constants';
import { PartItem } from '../interface/home';

export const partData = [
    {
        partType: 'P1',
        title: 'Listening Part 1',
        image: images.part1,
        titleDes: 'Mô tả hình ảnh',
        partKey: 'part1',
        des: 'là phần nội dung nhìn tranh và miêu tả. Phần này gồm 10 bức tranh (đề mới: 6 bức tranh), mỗi bức tranh sẽ có 4 câu mô tả không được in trong đề. Nhiệm vụ của các bạn là nghe và chọn đáp án mô tả đúng bức tranh nhất.'
    },
    {
        partType: 'P2',
        title: 'Listening Part 2',
        image: images.part2,
        titleDes: 'Hỏi đáp',
        partKey: 'part2',
        des: 'gồm 30 câu (đề mới 25 câu). Mỗi câu có 1 câu hỏi và 3 lựa chọn đáp án. Nhiệm vụ là phải chọn ra câu trả lời tương thích với câu hỏi trong bài.'
    },
    {
        partType: 'P3',
        title: 'Listening Part 3',
        image: images.part3,
        titleDes: 'Đoạn hội thoại ngắn',
        partKey: 'part3',
        des: 'Trong phần này, bạn sẽ được nghe 13 đoạn hội thoại ngắn không in trong đề thi. Mỗi đoạn có 03 câu hỏi, mỗi câu hỏi sẽ có 4 đáp án lựa chọn và nhiệm vụ của thí sinh là chọn đáp án đúng nhất.'
    },
    {
        partType: 'P4',
        title: 'Reading Part 4',
        image: images.part4,
        titleDes: 'Bài nói chuyện',
        partKey: 'part4',
        des: 'Phần nghe của TOEIC Part 4 chia làm 30 câu hỏi, tương đương với 10 bài nói. Đặc điểm của bài nói này là chỉ có một người nói, một giọng đọc xuyên suốt và thường liên quan đến các chủ đề quen thuộc trong đời sống hằng ngày nên rất dễ để nghe và xác định đáp án đúng.'
    }
];

// Dummy Datas

export const categoryData: PartItem[] = [
    {
        id: 1,
        name: "Part 1",
        icon: icons.rice_bowl,
        type: 'P1',
        partKey: 'part1',
    },
    {
        id: 2,
        name: "Part 2",
        icon: icons.noodle,
        type: 'P2',
        partKey: 'part2',
    },
    {
        id: 3,
        name: "Part 3",
        icon: icons.hotdog,
        type: 'P3',
        partKey: 'part3',
    },
    {
        id: 4,
        name: "Part 4",
        icon: icons.salad,
        type: 'P4',
        partKey: 'part4',
    },

]

export const restaurantData = [
    {
        id: 1,
        name: "ByProgrammers Burger",
        rating: 4.8,
        categories: [1, 2],
        priceRating: 4,
        photo: images.burger_restaurant_1,
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            avatar: images.avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: images.honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: images.baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "ByProgrammers Pizza",
        rating: 4.8,
        categories: [1, 2, 3],
        priceRating: 5,
        photo: images.pizza_restaurant,
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            avatar: images.avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: images.pizza,
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                photo: images.tomato_pasta,
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: images.pizza,
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
]

export const answersOption = ['A', 'B', 'C', 'D'];

export const levelPartTesting = [
    {
        id: '1',
        title: 'Level 250 - 500',
        time: 'Part 1',
        level: 1
    },
    {
        id: '2',
        title: 'Level 500 - 750',
        time: 'Part 1',
        level: 2
    },
    {
        id: '3',
        title: 'Level 750 - 990',
        time: 'Part 1',
        level: 3
    }
]
