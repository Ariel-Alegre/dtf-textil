import "./Category.css";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Category() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                <img
                  src="https://www.dtfrapido.com/wp-content/uploads/2024/01/DTFRAPIDO-FOTOS_Mesa-de-trabajo-1-scaled.jpg"
                  alt="not found"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <p className="text-xl font-semibold text-gray-900 text-center mb-4">
                DTF TEXTIL
              </p>

              <Link to="/dtf">
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Comprar
                </Button>
              </Link>
            </div>
            {/*        <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                <img
                  src="https://www.dtfrapido.com/wp-content/uploads/2024/01/DTFRAPIDO-FOTOS-02-scaled.jpg"
                  alt="not found"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <p className="text-xl font-semibold text-gray-900 text-center mb-4">
              DTF UV
              </p>

              <a href="">
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Comprar
                </Button>
              </a>
            </div> */}
            {/*   <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                <img
                  src="https://www.dtfrapido.com/wp-content/uploads/2024/01/DTFRAPIDO-FOTOS-scaled.jpg"
                  alt="not found"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <p className="text-xl font-semibold text-gray-900 text-center mb-4">
              DTF TEXTIL FLÚOR
              </p>

              <a href="">
                <Button
                  variant="contained"
                  sx={{
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Comprar
                </Button>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
