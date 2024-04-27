import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Section from "../root/components/Section";
import Link from "../ui/components/Link/Link";
import Typography from "../ui/components/Typography/Typography";

const SectionSocials = () => {
  return (
    <Section>
      <div className="space-y-4">
        <Typography variant="headingSm">Jasper Verbeet</Typography>
        <div className="space-y-1">
          <Typography variant="bodyMd" color="secondary" className="italic">
            Engineer
          </Typography>
          <Typography variant="bodyMd" color="secondary">
            7+ years of experience building for the web.
          </Typography>
        </div>
      </div>
      <ul className="space-y-4">
        <li>
          <Link
            href="https://www.linkedin.com/in/jasperverbeet/"
            color="primary"
            variant="bodyMd"
            iconLeftVariant="primary"
            iconRightVariant="primary"
            iconLeft={IconBrandLinkedin}
            showUnderline
          >
            jasperverbeet
          </Link>
        </li>
        <li>
          <Link
            href="mailto:jasperverbeet@gmail.com"
            color="primary"
            variant="bodyMd"
            iconLeft={IconMail}
            iconLeftVariant="primary"
            showUnderline
          >
            jasperverbeet@gmail.com
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default SectionSocials;
